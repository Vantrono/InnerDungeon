@echo off

cd\
cd C:\QuakeDev\working


echo Copying Files...
copy C:\QuakeDev\id1\maps\Test.map C:\QuakeDev\working


echo Converting map...


echo --------------QBSP--------------
C:\QuakeDev\tools\ericw-tools\bin\qbsp.exe Test

echo --------------VIS---------------
C:\QuakeDev\tools\ericw-tools\bin\vis.exe Test

echo -------------LIGHT--------------
C:\QuakeDev\tools\ericw-tools\bin\light.exe Test

copy Test.bsp C:\QuakeDev\id1\maps
copy Test.pts C:\QuakeDev\id1\maps
copy Test.lit C:\QuakeDev\id1\maps
