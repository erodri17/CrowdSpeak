<?php 

if(isset($_FILES['file']) and !$_FILES['file']['error']){
    $fname = "11" . ".waebm";

    move_uploaded_file($_FILES['file']['tmp_name'], "../video/" . $fname);
}
?>