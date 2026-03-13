@echo off
echo.
echo === Pushing Portfolio to GitHub ===
echo.

REM Initialize Git if not already done
if not exist .git (
    echo Initializing Git repository...
    git init
)

REM Cleanup unwanted files
echo Cleaning up legacy files...
if exist index.html del index.html
if exist install.bat del install.bat
if exist start.js del start.js
if exist install_log.txt del install_log.txt

REM Add and commit files
echo Committing files...
git add .
git commit -m "Initial commit: Modern Developer Portfolio (Jonny Czar style)"

REM Set remote origin
echo Setting remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/ubaith444/PORTFOLIO.git

REM Push to GitHub
echo Pushing to GitHub...
echo.
echo NOTE: You might be asked to sign in to GitHub in a popup window.
git branch -M main
git push -u origin main

echo.
echo === Done! Check your repo at: https://github.com/ubaith444/PORTFOLIO ===
pause
