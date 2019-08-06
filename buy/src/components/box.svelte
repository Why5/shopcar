<script>
	export let bos = [];
    export let tagfn =()=>{}
    function addevt(add){
        ++add;
    }
    export let sumFn =()=>{}
   
</script>

{#if bos}
    {#each bos.cont as item,i (item.id)}
        <dl>
            <dt class={item.tag?'active':null} on:click={()=>{
                    item.tag=!item.tag;
                    bos.tag = bos.cont.every(item => item.tag)
                    tagfn()
                    sumFn()
            }}></dt>
            <dd><img src={item.image} class="imgs" alt=""/></dd>
            <dd>
                <p>{item.tit}</p>
                <input type="text" value={item.cont}/>
                <div class="hedti">
                    <span>￥{item.money}</span>
                    <div class="tapbtn">

                        <span on:click={()=>{
                            if(item.num){
                                item.num--
                                bos=bos
                                sumFn()
                            }
                        }}>-</span>

                        <p>{item.num}</p>

                        <span on:click={()=>{
                            item.num++
                            bos=bos
                            sumFn()
                        }}>+</span>

                    </div>
                </div>
            </dd>
        </dl>   
    {/each}
{/if}

<style>
    .imgs {
            width: 88px;
            height: 88px;
            margin-right: 9px;
        }
        
    dl{
        width:100%;
        display:flex;
        align-items: center;
    }
    
    dt {
        width:16px;
        height:16px;
        border:1px solid #6c6c6c;
        border-radio:50%;
        margin-right:20px;
    }

    input {
        margin-right:20px;
    }

    .hedti {
        display:flex;
        justify-content:space-between;
    }

    .tapbtn {
        display:flex;
    }
    
    .active {
        background: red!important;
    }
</style>

 