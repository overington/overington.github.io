#!/usr/bin/env bash

# Two-way sync between local public/media and remote rpi:/src/blog-media
# Uses rsync in archive mode over SSH
# Prompts before deleting files (for safety)


LOCAL_DIR="$(dirname "$0")"  # Directory of this script (public/media)
REMOTE="rpi:/srv/blog-media"

# Check for --dry-run argument
DRYRUN=""
if [[ "$1" == "--dry-run" ]]; then
	DRYRUN="--dry-run"
	echo "Running in dry-run mode. No files will be changed."
fi

# Usage: ./sync.sh [push|pull|sync] [--dry-run]
CMD="sync"
if [[ "$1" == "push" || "$1" == "pull" || "$1" == "sync" ]]; then
  CMD="$1"
  shift
fi
if [[ "$1" == "--dry-run" ]]; then
  DRYRUN="--dry-run"
  echo "Running in dry-run mode. No files will be changed."
fi

EXCLUDES="--exclude .DS_Store"

case "$CMD" in
  push)
    echo "Pushing local → remote..."
    rsync -avz --progress $EXCLUDES $DRYRUN "$LOCAL_DIR/" "$REMOTE/"
    ;;
  pull)
    echo "Pulling remote → local..."
    rsync -avz --progress $EXCLUDES $DRYRUN "$REMOTE/" "$LOCAL_DIR/"
    ;;
  sync)
    echo "Syncing local → remote..."
    rsync -avz --progress $EXCLUDES $DRYRUN "$LOCAL_DIR/" "$REMOTE/"
    echo "Syncing remote → local..."
    rsync -avz --progress $EXCLUDES $DRYRUN "$REMOTE/" "$LOCAL_DIR/"
    ;;
  *)
    echo "Usage: $0 [push|pull|sync] [--dry-run]"
    exit 1
    ;;
esac

echo "Operation complete."