var images=document.getElementsByClassName("a")
for(i=1;i<=images.length;i++)
{
    images[i-1].setAttribute("src","../ASSETS/pics/planets/"+i+".jpg")
    images[i-1].style.width="220px"
    images[i-1].style.height="220px"
}
console.log(images)
//this is for header
var imgarr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"]
var indval = 0;
function inc()
    {
        indval++;
        if(indval>=imgarr.length)
        {
            indval=0;
        document.getElementById("header").style.backgroundImage="url(../ASSETS/pics/planets/"+imgarr[indval]+")"
        }
        else
        {
            document.getElementById("header").style.backgroundImage="url(../ASSETS/pics/planets/"+imgarr[indval]+")"
       
        }
    }
    function dec()
    {
        indval--;
        if(indval<0)
        {
            indval=imgarr.length;
        document.getElementById("header").style.backgroundImage="url(../ASSETS/pics/planets/"+imgarr[indval]+")"
        }
        else{
            document.getElementById("header").style.backgroundImage="url(../ASSETS/pics/planets/"+imgarr[indval]+")"
        }
    }
    function openimg(pic name,info)
    {
        document.getElementById("subWindow").removeAttribute("style")
        document.getElementById("subWindowImg").src="../ASSETS/pics/planets/"+pic+".jpg"
        document.getElementById("imageHeading").innerHTML=name;
        document.getElementById("imagpara").innerHTML=info;
    }
    function closeimg()
    document.getElementById("subWindow").setAttribute("style","display:none")

</script>
</body>
</html>