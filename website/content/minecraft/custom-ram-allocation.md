# How to allocate custom RAM for your minecraft client
Minecraft, especially on newer versions is laggy for lots of computers, even more so if you have a lower end computer.
Ram allocation can't solve everything, if this tutorial doesn't end up helping you may need to setup and install Sodium (a minecraft optimisation mod).

## Let's Get Started

1. Open the minecraft launcher
![Minecraft Launcher Picture](https://cdn.upload.systems/uploads/vSntNaAI.png)
2. Navigate to the Installation Tab
![Minecraft Installations Tabs](https://cdn.upload.systems/uploads/dxBiW3f5.png)
3. Find the Minecraft Install you want to give more RAM to, and click the three dots to edit the install
![Minecraft Installation Edit Button](https://cdn.upload.systems/uploads/UY1YlwI8.png)
4. Once you are in the "Edit installation" tab, click the *More Options* dropdown to show the *JVM Arguments* section
**This option allows you to edit the arguments that the launcher uses when starting your minecraft client**
![JVM Arguments option in the Edit installation tab](https://cdn.upload.systems/uploads/6Rpp8zWi.png)
5. Put the argument *-Xmx2G* at the start of the string, making sure there is a space between the rest of the arguments
It should look like this:
```text
-Xmx2G -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M
```
To change the ammount of Ram, simply change the 2 to another number. This number will dictate the ammount of gigabytes of ram to dedicate to your client.
