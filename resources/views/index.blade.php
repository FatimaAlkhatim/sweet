@extends('parent')

@section('main')

<table class="table table-bordered table-striped">
<tr>
<th width="10%">Image</th>
<th width="35%">Frist Name</th>
<th width="35%">Last Name</th>
<th width="30%">Action</th>
</tr>
@foreach($data as $row)
<tr>

<td><img src="{{ URL::to(img/work_02.jpg) }}images/{{ $row->image}}" class="img-thumbnail" width="75" /></td>
<td>{{ $row->first_name }}</td>
<td>{{ $row->last_name }}</td>
<td>

</td>
</tr>
@endforeach
</table>
{!!  @data->links() !!}

@endsection