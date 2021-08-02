var names=new Array();
names[0]="Yaakov";
names[1]="Jason";
names[2]="John wick";
names[3]="jerry";
names[4]="jessica";
names[5]="Jen";
names[6]="laura";
names[7]="Hayley";
names[8]="hope";
names[9]="jimmy";

for (var i = 0; i < names.length; i++) {
  if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
      console.log("Goodbye "+ names[i])
  }
  else{
    console.log("Hello "+ names[i])
  }
}