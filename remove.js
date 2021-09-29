export function remove(list){
    const clist = []
    const clist1 = []
    for(let i = 0; i < list.length; i+=1){
        if((list.slice(i) % 2) == 0){
            clist.push(list.slice(i))
        }
        else{
            clist1.push(list.slice(i))
        }
    }
    return clist
}