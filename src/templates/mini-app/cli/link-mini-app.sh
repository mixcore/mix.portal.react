#!/bin/bash

# Colors for terminal output
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get the absolute path to the project root
PROJECT_ROOT=$(cd "$(dirname "$0")/../../../.." && pwd)
MINI_APP_TEMPLATE="$PROJECT_ROOT/src/templates/mini-app"
DASHBOARD_APPS="$PROJECT_ROOT/src/app/dashboard/apps"
DESTINATION="$DASHBOARD_APPS/mini-app"

# Check if source template exists
if [ ! -d "$MINI_APP_TEMPLATE" ]; then
    echo -e "${RED}Error: Mini-app template not found at $MINI_APP_TEMPLATE${NC}"
    exit 1
fi

# Create apps directory if it doesn't exist
if [ ! -d "$DASHBOARD_APPS" ]; then
    echo -e "${BLUE}Creating dashboard apps directory...${NC}"
    mkdir -p "$DASHBOARD_APPS"
fi

# Remove existing link or directory if it exists
if [ -e "$DESTINATION" ]; then
    echo -e "${YELLOW}Removing existing mini-app link or directory...${NC}"
    rm -rf "$DESTINATION"
fi

# Create the symbolic link
echo -e "${BLUE}Creating symbolic link for mini-app template...${NC}"
ln -s "$MINI_APP_TEMPLATE" "$DESTINATION"

# Verify the link was created successfully
if [ -L "$DESTINATION" ]; then
    echo -e "${GREEN}✓ Successfully created symbolic link:${NC}"
    echo -e "  From: ${YELLOW}$MINI_APP_TEMPLATE${NC}"
    echo -e "  To:   ${YELLOW}$DESTINATION${NC}"
    echo -e "\n${GREEN}You can now access the mini-app template at:${NC}"
    echo -e "  ${YELLOW}http://localhost:3000/dashboard/apps/mini-app${NC}"
else
    echo -e "${RED}✗ Failed to create symbolic link.${NC}"
    exit 1
fi

exit 0 