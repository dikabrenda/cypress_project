change your parameter `clean test report` with this code


WINDOWS:

```json
if exist cypress\\reports rmdir /s/q cypress\\reports && mkdir cypress\\reports mkdir cypress\\reports\\mochareports
```