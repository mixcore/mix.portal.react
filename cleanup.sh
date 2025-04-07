#!/bin/bash

# Mixcore Documentation Cleanup Script
# This script removes old documentation files that have been consolidated into the new structure

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Mixcore Documentation Cleanup${NC}"
echo ""
echo "This script will remove old documentation files that have been consolidated into the new structure."
echo "The following files will be removed:"
echo ""

# List of old files to remove
FILES_TO_REMOVE=(
  # Root documentation files
  "MIGRATION-CHECKLIST.md"
  "PAGES-DETAIL-TRACKING.md"
  "MIGRATION-PLAN.md" 
  "ANGULAR-TO-REACT-PATTERNS.md"
  "API-DOCUMENTATION-GUIDE.md"
  "CODE-TRACKING.md"
  
  # App restructured files
  "src/app/_restructured/MIGRATION.md"
  "src/app/_restructured/IMPLEMENTATION-PLAN.md"
  "src/app/_restructured/README.md"
)

# Display files to be removed
for file in "${FILES_TO_REMOVE[@]}"; do
  if [ -f "$file" ]; then
    echo -e "- ${YELLOW}$(basename "$file")${NC}"
  fi
done

echo ""
read -p "Do you want to proceed with removing these files? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
  # Remove files
  for file in "${FILES_TO_REMOVE[@]}"; do
    if [ -f "$file" ]; then
      rm "$file"
      echo -e "${GREEN}Removed:${NC} $(basename "$file")"
    else
      echo -e "${YELLOW}File not found:${NC} $(basename "$file")"
    fi
  done
  
  echo ""
  echo -e "${GREEN}Cleanup completed successfully.${NC}"
  echo "All documentation has been consolidated into the new structure under the docs/ directory."
else
  echo ""
  echo -e "${YELLOW}Cleanup cancelled.${NC}"
fi

exit 0 