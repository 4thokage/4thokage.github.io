---
title: CTL Helper
description: A simple tool to extract and load oracle DB data 
tags:
  - javafx
author: JSR
authorTwitter: Zezadas1
date: "2018-03-31T17:57:00.000Z"
category: Tooling
---

While developing with sqlldr, I made a tool to speed up some boring work (like making those freaking huge control files...)

## Downloads
* Jar: [v1.0](/software/ctlper-1.0-SNAPSHOT-jar-with-dependencies.jar)
* Sources: [v1.0 (.zip)](/software/ctlper1.0.7z)

### What does it do?
Well it's a simple JavaFX app that generates some files for you:

1. Connects to specified oracle DB and reads all user tables.
2. Generates a Loader/Extractor CTL based on the chosen tables.

