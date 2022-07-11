echo off
title Auto J4J // JotaroNukers on Top
color a
cls
:a
cls
echo *************************************
echo *            Auto J4J               *
echo *        JotaroNukers Tool          *
echo *************************************
echo Auto J4J Made by JotaroNukers Leader.

echo 1 - Start
echo 2 - Tutorial
echo 3 - Exit
set /p ans="Enter Number:"

if %ans%==1 (
goto b
)

if %ans%==2 (
goto d
)

if %ans%==3 (
goto c
)




:b
cls
node oxi.js
goto b
pause


:c



:d
cls
echo After you close the tab on Tutorial.txt You will go back to menu :D
Tutorial.txt
goto a
