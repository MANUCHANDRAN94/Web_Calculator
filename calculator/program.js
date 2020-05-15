let a,flg,b,c,ans;

function display(valu)
{ if(length.ans>2)
{
  clearDisaplay();
} else{
  a= document.getElementById("screen").value+=valu
  console.log("\n "+a);
}}

function opr(opn)
{
  if(opn=='+')
  { b=a;
    flg=1;
    clearDisaplay();
  }
  else if(opn=='-')
  { b=a;
    flg=2;
    clearDisaplay();
  }
  else if(opn=='*')
  { b=a;
    flg=3;
    clearDisaplay();
  }
  else if(opn=='/')
  { b=a;
    flg=4;
    clearDisaplay();
  }
  else if(opn=='=')
  { 
    clearDisaplay();
    calc();
  }
  
  
}
function calc()
{
  
  switch(flg)
  {
    case 1:
      ans=a+'+'+b;
      c= eval(ans);
      console.log("\n "+c);
      document.getElementById("screen").value=c;
      c=""
      ans=""
      break
    case 2:
      ans=b-a;
      console.log("\n "+ans);
      document.getElementById("screen").value=ans;
      ans=""
      break
    case 3:
      ans=b*a;
      console.log("\n "+ans);
      document.getElementById("screen").value=ans;
      ans=""
      break
    case 4:
      ans=b/a;
      console.log("\n "+ans);
      document.getElementById("screen").value=ans;
      ans=""
      break    
  }

}

function clearDisaplay()
{
    document.getElementById("screen").value=""
}
