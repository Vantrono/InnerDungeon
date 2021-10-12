@echo off

cd\
cd C:\Users\Dat\Qwoke\QuakeDev\working


echo Copying Files...
copy C:\Users\Dat\Qwoke\QuakeDev\id1\maps\SplitQwake.map C:\Users\Dat\Qwoke\QuakeDev\working


echo Converting map...


echo --------------QBSP--------------
C:\Users\Dat\Qwoke\QuakeDev\tools\ericw-tools\bin\qbsp.exe SplitQwake

echo --------------VIS---------------
C:\Users\Dat\Qwoke\QuakeDev\tools\ericw-tools\bin\vis.exe SplitQwake

copy SplitQwake.bsp C:\Users\Dat\Qwoke\QuakeDev\id1\maps
copy SplitQwake.pts C:\Users\Dat\Qwoke\QuakeDev\id1\maps
copy SplitQwake.lit C:\Users\Dat\Qwoke\QuakeDev\id1\maps
