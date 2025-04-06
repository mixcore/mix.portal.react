'use client';

import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Form, InputGroup } from 'react-bootstrap';
import Link from 'next/link';
import { PostsApi } from '@/services/api';
import { Post, PaginationResult } from '@/types';
import styles from './posts.module.css';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Omit<PaginationResult<Post>, 'items'>>({
    totalItems: 0,
    pageSize: 10,
    pageIndex: 0,
    totalPages: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, [pagination.pageIndex]);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await PostsApi.getPosts(pagination.pageIndex, pagination.pageSize, searchText);
      
      if (result.success) {
        setPosts(result.data.items);
        setPagination({
          totalItems: result.data.totalItems,
          pageSize: result.data.pageSize,
          pageIndex: result.data.pageIndex,
          totalPages: result.data.totalPages,
        });
      } else {
        setError('Failed to load posts');
      }
    } catch (err) {
      setError('An error occurred while loading posts');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPosts();
  };

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({
      ...prev,
      pageIndex: newPage,
    }));
  };

  const renderPagination = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(0, pagination.pageIndex - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(pagination.totalPages - 1, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i} className={`page-item ${pagination.pageIndex === i ? 'active' : ''}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(i)}
          >
            {i + 1}
          </button>
        </li>
      );
    }

    return (
      <nav aria-label="Posts pagination">
        <ul className="pagination">
          <li className={`page-item ${pagination.pageIndex === 0 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(pagination.pageIndex - 1)}
              disabled={pagination.pageIndex === 0}
            >
              Previous
            </button>
          </li>
          {pages}
          <li className={`page-item ${pagination.pageIndex === pagination.totalPages - 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(pagination.pageIndex + 1)}
              disabled={pagination.pageIndex === pagination.totalPages - 1}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <Container fluid className="py-4">
      <Row className="mb-4 align-items-center">
        <Col>
          <h1>Posts</h1>
        </Col>
        <Col xs="auto">
          <Link href="/admin/post/create" passHref legacyBehavior>
            <Button variant="primary">Create New Post</Button>
          </Link>
        </Col>
      </Row>

      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleSearch}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search posts..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button variant="outline-secondary" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-5">
              <p className="mb-0">No posts found</p>
            </div>
          ) : (
            <>
              <Table responsive hover className="mb-0">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>
                        <span className={`badge ${post.status === 2 ? 'bg-success' : 'bg-warning'}`}>
                          {post.status === 2 ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td>{new Date(post.createdDate).toLocaleDateString()}</td>
                      <td>
                        <div className="btn-group">
                          <Link href={`/admin/post/edit/${post.id}`} passHref legacyBehavior>
                            <Button variant="outline-primary" size="sm">Edit</Button>
                          </Link>
                          <Link href={`/admin/post/view/${post.id}`} passHref legacyBehavior>
                            <Button variant="outline-info" size="sm">View</Button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <div>
                  Showing {posts.length} of {pagination.totalItems} posts
                </div>
                {pagination.totalPages > 1 && renderPagination()}
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
} 