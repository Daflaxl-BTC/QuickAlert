@echo off
cd /d "%~dp0"
echo QuickAlert - Dev-Server starten...
echo.

if not exist "node_modules" (
    echo node_modules fehlt - installiere Abhaengigkeiten...
    call npm install
    if errorlevel 1 (
        echo.
        echo FEHLER: npm install fehlgeschlagen.
        echo Bitte stellen Sie sicher, dass Node.js installiert ist: https://nodejs.org
        pause
        exit /b 1
    )
    echo.
)

echo Starte Dev-Server auf http://localhost:3000
echo Zum Beenden: Strg+C
echo.
call npm run dev
pause
