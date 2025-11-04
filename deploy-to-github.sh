#!/bin/bash

echo "================================================"
echo "  SmartBuild Construction Template"
echo "  GitHub Deployment Script"
echo "================================================"
echo

echo "[1/6] Checking Git status..."
git status
echo

echo "[2/6] Adding all files to Git..."
git add .
echo

echo "[3/6] Committing changes..."
git commit -m "Deploy: SmartBuild Construction Template v1.0.0 - GitHub Pages Ready"
echo

echo "[4/6] Checking remote repository..."
git remote -v
echo

echo "[5/6] Pushing to GitHub..."
git push origin main
echo

echo "[6/6] Deployment complete!"
echo
echo "================================================"
echo "  🎉 SUCCESS! Your site is now live!"
echo "================================================"
echo
echo "Your website will be available at:"
echo "https://your-username.github.io/construction-template/"
echo
echo "Note: It may take 5-10 minutes for GitHub Pages to update."
echo
echo "To customize:"
echo "1. Replace 'your-username' with your GitHub username"
echo "2. Update company details in HTML files"
echo "3. Add your images to assets/img/ folder"
echo
