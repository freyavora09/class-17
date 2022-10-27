class Box
  {
    constructor(x,y,h,w,vx)
    {
    this.x=x
    this.y=y
    this.h=h
    this.w=w
    this.vx=vx
    }
    display()
{
  rect(this.x,this.y,this.h,this.w)
}
move(){
this.x=this.x+this.vx



}
  }

  
