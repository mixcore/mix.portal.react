@echo off
setlocal enabledelayedexpansion

:: Colors for terminal output
set "BLUE=[94m"
set "GREEN=[92m"
set "YELLOW=[93m"
set "RED=[91m"
set "NC=[0m"

:: Get the absolute path to the project root
pushd "%~dp0\..\..\..\..\"
set "PROJECT_ROOT=%CD%"
popd

set "MINI_APP_TEMPLATE=%PROJECT_ROOT%\src\templates\mini-app"
set "DASHBOARD_APPS=%PROJECT_ROOT%\src\app\dashboard\apps"
set "DESTINATION=%DASHBOARD_APPS%\mini-app"

:: Check if source template exists
if not exist "%MINI_APP_TEMPLATE%" (
    echo %RED%Error: Mini-app template not found at %MINI_APP_TEMPLATE%%NC%
    exit /b 1
)

:: Create apps directory if it doesn't exist
if not exist "%DASHBOARD_APPS%" (
    echo %BLUE%Creating dashboard apps directory...%NC%
    mkdir "%DASHBOARD_APPS%"
)

:: Remove existing link or directory if it exists
if exist "%DESTINATION%" (
    echo %YELLOW%Removing existing mini-app link or directory...%NC%
    rmdir /s /q "%DESTINATION%" 2>nul
    if exist "%DESTINATION%" (
        del /f /q "%DESTINATION%" 2>nul
    )
)

:: Create the symbolic link (requires administrator privileges)
echo %BLUE%Creating symbolic link for mini-app template...%NC%
:: Check if running as administrator
net session >nul 2>&1
if %errorlevel% == 0 (
    mklink /d "%DESTINATION%" "%MINI_APP_TEMPLATE%"
) else (
    echo %YELLOW%Administrator privileges required to create symbolic links.%NC%
    echo %YELLOW%Attempting to create junction instead...%NC%
    mklink /j "%DESTINATION%" "%MINI_APP_TEMPLATE%"
)

:: Verify the link was created successfully
if exist "%DESTINATION%" (
    echo %GREEN%✓ Successfully created link:%NC%
    echo   From: %YELLOW%%MINI_APP_TEMPLATE%%NC%
    echo   To:   %YELLOW%%DESTINATION%%NC%
    echo.
    echo %GREEN%You can now access the mini-app template at:%NC%
    echo   %YELLOW%http://localhost:3000/dashboard/apps/mini-app%NC%
) else (
    echo %RED%✗ Failed to create link.%NC%
    echo.
    echo %YELLOW%Try running the script as Administrator or manually copy the template:%NC%
    echo   xcopy /E /I "%MINI_APP_TEMPLATE%" "%DESTINATION%"
    exit /b 1
)

exit /b 0 