<!DOCTYPE html>
<html>
<head>
	<title>Header</title>
</head>
<body>

@foreach($arrayName as $item)


@endforeach

<form action="{{route('umair')}}" method="post">
	@csrf
	<input name="this" type="text" >
	<input name="submit" value="submit" type="submit" >
	
</form>

</body>
</html>