<script>
    import {onMount} from "svelte";
    import axios from 'axios';
    import Box from "../components/box.svelte";
    var quan =false;
    var data,sum=0; 
    onMount(()=>{
        axios.get('http://169.254.213.211:7001/api/data').then((res)=>{
            data=res.data.data.list
            console.log(data)
        })
    })
    
    const quanfn = ()=>{
        quan = data.every(item =>item.tag)
    }

    //sums 合计

    const sums=()=>{
        sum=0;
        data.map(res=>{
            return res.cont.map(item=>{
                if(item.tag){
                    return sum+=item.num*item.money
                }
            })
        })
    }
</script>

<div class="header">购物车</div>
<div class="section">
    <div class="shopList">
        <div class="shoplist-item">
            {#if data}
                {#each data as item,i (item.id)}

                    <p><dt class={item.tag?'active':null} on:click={()=>{
                        item.tag=!item.tag;
                        item.cont.filter((res)=>{
                            return res.tag=item.tag;
                        })
                        
                        quanfn()
                        sums()

                        data=data
                    }}></dt>{item.name}</p>

                    <Box bos={item} tagfn={()=>{
                        data = data
                        quanfn()
                    }} sumFn={()=>{
                        sums()
                    }}/>
                    
                {/each}
            {/if}
        </div>
    </div>
</div>
<div class="footer">
   <p on:click={()=>{
       quan= !quan
       data.forEach(item=>{
           item.tag = quan
           item.cont.forEach(n =>{
               n.tag= quan
           })
       })
       sums();
       data =data
   }}><span class:active={quan}></span><b >全选</b></p>

   <div>
        <h3>总计：{sum}</h3>
        <button>去结算</button>
   </div>
</div>

<style>
    .header {
        width:100%;
        height:44px;
        line-height:44px;
        text-align:center;
        font-size:22px;
        border-bottom:1px solid #6c6c6c;
    }

    .section {
        width:100%;
        flex:1;
        padding:15px;
        overflow-y: auto;
    }

    dt,.footer span{
        width:16px;
        height:16px;
        display:inline-block;
        border:1px solid #6c6c6c;
        border-radio:50%;
        margin-right:20px;
    }

    .footer {
        width:100%;
        height:44px;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer div {
        display:flex;
    }
    
     input {
        margin-right:20px;
    }

    .shoplist-item p{
        display:flex;
        align-items:center;
        margin-bottom:10px;
    }

    .active {
        background: firebrick!important;
    }
</style>