---
title: CTL Helper
description: A simple tool to extract and load oracle DB data 
tags:
  - javafx
author: JSR
date: "2018-03-31"
category: Tooling
---

While developing with sqlldr, I made a tool to speed up some boring work (like making those freaking huge control files...)

## Downloads
* [v1.0 - Release files](https://github.com/4thokage/ctlfx/releases/tag/1.0.0-RELEASE)
* Maven:
```xml
<dependency>
  <groupId>pt.zenit.oracle</groupId>
  <artifactId>ctlfx</artifactId>
  <version>1.0.0-RELEASE</version>
</dependency> 
```

### What does it do?
Well it's a simple JavaFX app that generates some files for you:

1. Connects to specified oracle DB and reads all user tables.
2. Generates a Loader/Extractor CTL based on the chosen tables.

