@echo off
chcp 65001 > nul
echo.
echo =========================================
echo  M^&C AS9100D 문서 변환 도구
echo =========================================
echo.

cd /d "%~dp0"

:: 의존성 설치 여부 확인
if not exist "node_modules\jszip" (
  echo [준비] npm 패키지 설치 중...
  call npm install
  echo.
)

:: reference.docx 존재 여부 확인
if not exist "..\06_산출물_문서\Reference Doc\reference.docx" (
  echo [1단계] reference.docx 템플릿 생성 중...
  node setup.js
  if errorlevel 1 (
    echo 오류: setup.js 실패
    pause
    exit /b 1
  )
  echo.
) else (
  echo [확인] reference.docx 템플릿 존재 확인
)

echo.
echo [2단계] MD 파일 일괄 변환 시작...
echo.
node convert.js

echo.
echo 완료. 아무 키나 누르면 종료합니다.
pause > nul
