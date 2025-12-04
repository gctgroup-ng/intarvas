#!/bin/bash

# IntarvAS Codebase Cleanup Script
# ✅ CLEANUP ALREADY COMPLETED - This script has been run successfully!
# The /src/ folder and old Vite files have been removed.
# See CLEANUP_COMPLETED.md for details.

echo "✅ CLEANUP ALREADY COMPLETED!"
echo ""
echo "The following were removed:"
echo "  - /src/ folder (duplicates)"
echo "  - index.html (old Vite)"
echo "  - vite.config.ts (old Vite config)"
echo "  - Old TypeScript configs"
echo ""
echo "See CLEANUP_COMPLETED.md for full details."
exit 0

# === ORIGINAL SCRIPT BELOW (no longer needed) ===

echo "🧹 IntarvAS Codebase Cleanup"
echo "=============================="
echo ""
echo "This will delete the following old files:"
echo "  - /src/ folder (old Vite code, duplicates)"
echo "  - index.html (old Vite entry)"
echo "  - vite.config.ts (old Vite config)"
echo "  - tsconfig.app.json (old Vite TypeScript config)"
echo "  - tsconfig.node.json (old Vite TypeScript config)"
echo ""
echo "⚠️  WARNING: This is permanent!"
echo ""
read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "❌ Cleanup cancelled."
    exit 0
fi

echo ""
echo "🗑️  Removing old files..."

# Remove src folder
if [ -d "src" ]; then
    echo "  - Deleting src/ folder..."
    rm -rf src
    echo "    ✅ Deleted"
else
    echo "  - src/ folder not found (already deleted?)"
fi

# Remove Vite files
if [ -f "index.html" ]; then
    echo "  - Deleting index.html..."
    rm index.html
    echo "    ✅ Deleted"
fi

if [ -f "vite.config.ts" ]; then
    echo "  - Deleting vite.config.ts..."
    rm vite.config.ts
    echo "    ✅ Deleted"
fi

if [ -f "tsconfig.app.json" ]; then
    echo "  - Deleting tsconfig.app.json..."
    rm tsconfig.app.json
    echo "    ✅ Deleted"
fi

if [ -f "tsconfig.node.json" ]; then
    echo "  - Deleting tsconfig.node.json..."
    rm tsconfig.node.json
    echo "    ✅ Deleted"
fi

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "📋 Next steps:"
echo "  1. Run: npm run dev"
echo "  2. Test all pages at http://localhost:3000"
echo "  3. If everything works, commit:"
echo "     git add ."
echo "     git commit -m 'Clean up old Vite/React Router files'"
echo "     git push"
echo ""
echo "🎉 Your codebase is now clean and organized!"

