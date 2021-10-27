@echo off

cd\
cd C:\Users\382985\Documents\GitHub\Qwoke\QuakeDev\working


echo Copying Files...
copy C:\Users\382985\Documents\GitHub\Qwoke\QuakeDev\id1\maps\SplitQwake.map C:\Users\382985\Documents\GitHub\Qwoke\QuakeDev\working


echo Converting map...


echo --------------QBSP--------------
C:\Users\382985\Documents\GitHub\Qwoke\QuakeDev\tools\ericw-tools\bin\qbsp.exe SplitQwake

echo --------------VIS---------------
C:\Users\382985\Documents\GitHub\Qwoke\QuakeDev\tools\ericw-tools\bin\vis.exe SplitQwake

echo -------------LIGHT--------------
C:\Users\382985\Documents\GitHub\Qwoke\QuakeDev\tools\ericw-tools\bin\light.exe -soft -extra4 SplitQwake

copy SplitQwake.bsp C:\Users\382985\Documents\GitHub\Qwoke\QuakeDev\id1\maps
copy SplitQwake.pts C:\Users\382985\Documents\GitHub\Qwoke\QuakeDev\id1\maps
copy SplitQwake.lit C:\Users\382985\Documents\GitHub\Qwoke\QuakeDev\id1\maps
