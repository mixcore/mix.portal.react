#!/bin/bash

# Script to help with the migration of the app folder structure

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(dirname "$SCRIPT_DIR")"

echo -e "${YELLOW}Mixcore App Migration Helper${NC}"
echo "==============================="
echo

function show_help {
  echo "Usage: $0 [command]"
  echo
  echo "Commands:"
  echo "  help                Show this help message"
  echo "  structure           Create the new folder structure"
  echo "  status              Show migration status"
  echo "  finalize            Apply the migration"
  echo
}

function create_structure {
  echo -e "${YELLOW}Creating new folder structure...${NC}"
  
  # Create main folders
  mkdir -p "$SCRIPT_DIR"/(auth)/login
  mkdir -p "$SCRIPT_DIR"/(auth)/register
  mkdir -p "$SCRIPT_DIR"/(dashboard)/pages/{create,\[id\]/edit}
  mkdir -p "$SCRIPT_DIR"/(dashboard)/posts/{create,\[id\]/edit}
  mkdir -p "$SCRIPT_DIR"/(dashboard)/products
  mkdir -p "$SCRIPT_DIR"/(dashboard)/profile
  mkdir -p "$SCRIPT_DIR"/(dashboard)/settings
  mkdir -p "$SCRIPT_DIR"/api/{auth,pages,posts}
  
  echo -e "${GREEN}Folder structure created successfully!${NC}"
  echo "See MIGRATION.md for implementation details and next steps."
}

function show_status {
  echo -e "${YELLOW}Migration Status:${NC}"
  echo "==============================="
  
  # Count files in new structure
  NEW_FILES=$(find "$SCRIPT_DIR" -type f -name "*.tsx" -o -name "*.ts" | wc -l)
  
  # Count files in old structure
  OLD_FILES=$(find "$APP_DIR" -not -path "$SCRIPT_DIR/*" -type f -name "*.tsx" -o -name "*.ts" | wc -l)
  
  echo "Files in new structure: $NEW_FILES"
  echo "Files in old structure: $OLD_FILES"
  
  if [ $NEW_FILES -eq 0 ]; then
    PERCENT=0
  else
    PERCENT=$((NEW_FILES * 100 / (NEW_FILES + OLD_FILES)))
  fi
  
  echo -e "Migration progress: ${GREEN}$PERCENT%${NC}"
  echo
  
  # Show completed components
  echo -e "${YELLOW}Completed components:${NC}"
  find "$SCRIPT_DIR" -type f -name "*.tsx" -o -name "*.ts" | sed "s|$SCRIPT_DIR/||" | sort
  echo
  echo "For detailed status, see MIGRATION.md"
}

function finalize_migration {
  echo -e "${YELLOW}Are you sure you want to finalize the migration?${NC}"
  echo "This will move all files from _restructured to the app folder."
  echo "Make sure you have completed all tasks in MIGRATION.md"
  echo "and have thoroughly tested the application."
  echo
  read -p "Type 'yes' to confirm: " CONFIRM
  
  if [ "$CONFIRM" = "yes" ]; then
    echo -e "${YELLOW}Finalizing migration...${NC}"
    
    # Backup the current app folder
    BACKUP_DIR="$APP_DIR/../app-backup-$(date +%Y%m%d-%H%M%S)"
    cp -r "$APP_DIR" "$BACKUP_DIR"
    echo -e "Backup created at: ${GREEN}$BACKUP_DIR${NC}"
    
    # Move files to new structure
    rsync -av --exclude="_restructured" "$SCRIPT_DIR"/ "$APP_DIR"/
    
    echo -e "${GREEN}Migration completed successfully!${NC}"
    echo "You should now remove the _restructured folder manually after testing."
  else
    echo -e "${RED}Migration cancelled.${NC}"
  fi
}

# Process commands
case "$1" in
  "help")
    show_help
    ;;
  "structure")
    create_structure
    ;;
  "status")
    show_status
    ;;
  "finalize")
    finalize_migration
    ;;
  *)
    show_help
    ;;
esac 