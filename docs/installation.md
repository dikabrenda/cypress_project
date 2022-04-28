change your parameter `clean test report` with this code


WINDOWS:

```
if exist cypress\\reports rmdir /s/q cypress\\reports && mkdir cypress\\reports mkdir cypress\\reports\\mochareports
```

MacOS:
```
rm -R -f cypress/reports/* && mkdir cypress/reports/mochareport
```