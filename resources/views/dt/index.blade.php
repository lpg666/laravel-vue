<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>Laravel</title>
    <style></style>
</head>
<body>
    <div id="app">
        <router-view></router-view>
    </div>
<script src="{{asset('js/dt/main.js')}}"></script>
</body>
</html>
