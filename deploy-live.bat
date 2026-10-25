@echo off
title Deploy Wedding Website to GitHub Pages
echo ========================================================
echo   Rahul ❤️ Garima - 1-Click Live Website Deployment
echo   Repository: https://github.com/rahul2003-debug-code/rahul-garima
echo ========================================================
echo.

set PATH=C:\Users\kumar\AppData\Local\Programs\MinGit\cmd;%PATH%

echo [1/2] Building production website...
call npm run build

echo.
echo [2/2] Publishing to GitHub Pages...
echo (If prompted to sign in, please authorize with your GitHub account)
call npm run deploy

echo.
echo ========================================================
if %ERRORLEVEL% EQU 0 (
    echo SUCCESS! Website is now hosted!
    echo.
    echo Share this link directly with anyone:
    echo 👉 https://rahul2003-debug-code.github.io/rahul-garima/
) else (
    echo An error occurred. Please check GitHub credentials or token.
)
echo ========================================================
echo.
pause
