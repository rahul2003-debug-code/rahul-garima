@echo off
title Push Wedding Invitation to GitHub
echo ===================================================
echo   Rahul ❤️ Garima - Wedding Invitation Website
echo   Pushing code to https://github.com/rahul2003-debug-code/rahul-garima
echo ===================================================
echo.

set PATH=C:\Users\kumar\AppData\Local\Programs\MinGit\cmd;%PATH%

echo [1/3] Checking Git status...
git status

echo.
echo [2/3] Pushing to GitHub (main branch)...
echo If a GitHub login window pops up, click 'Sign in with your browser'.
echo.
git push -u origin main

echo.
echo ===================================================
if %ERRORLEVEL% EQU 0 (
    echo SUCCESS! Code successfully pushed to GitHub!
    echo.
    echo Website will be live in 1-2 minutes at:
    echo https://rahul2003-debug-code.github.io/rahul-garima/
) else (
    echo Something went wrong. If you need a Personal Access Token (PAT),
    echo generate one at: https://github.com/settings/tokens
)
echo ===================================================
echo.
pause
