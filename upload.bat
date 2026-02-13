@echo off
echo =======================================
echo          Rapid GitHub Uploader
echo =======================================

echo [1/3] Staging Changes...
git add .

echo [2/3] Committing Changes...
set /p msg="Enter commit message (or press Enter for default): "
if "%msg%"=="" set msg="Update: %date% %time%"
git commit -m "%msg%"

echo [3/3] Pushing to GitHub...
git push

echo =======================================
echo          Upload Complete!
echo =======================================
pause
