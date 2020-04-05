@extends('master')

@section('contact')



<form method="post" action="{{ route ('crud.store') }}" enctype="
multipart/form-data">
@csrf
<table border="1">
<tr>
<td> titel</td>
</tr>
</td>
<input type="submit" name="add" value="Add"> 
@endsection