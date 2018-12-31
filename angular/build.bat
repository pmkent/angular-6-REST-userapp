cmd /c ng build --base-href /
cmd /c xcopy  ".\dist\userapp" "..\..\..\java\userapp\src\main\webapp" /s /e /y /i

@rem ng build --base-href /pmk/