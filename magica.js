var imagens        = new Array( 'edit_laugh.gif', 'edit_spongebob.gif', 'edit_telephone.gif');
var num_img    = 3;
var img_atual =0;

function ChangeImg()
{
    if (img_atual < (num_img - 1) )
   {
        img_atual = img_atual + 1;
   }
   else
   {
        img_atual = 0;
   }
    document["img_apoio"].src    =  imagens[img_atual];
   var x = setTimeout ("ChangeImg()", 5000);
}
