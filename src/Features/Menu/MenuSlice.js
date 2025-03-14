import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getLocalStorageData = () =>{
    const data = localStorage.getItem("cartItems")
    return data ? JSON.parse(data) : []
}

const MenuSlice = createSlice({
    name : "Menu",
    initialState : {
        All_Cards : [],
        Card_Items : getLocalStorageData(),
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : ""
    },
    reducers : {
        Add : (state , action) =>{
            const existingItem = state.Card_Items.find(item => item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.Card_Items.push({...action.payload, quantity : 1})
            }
            localStorage.setItem("cartItems", JSON.stringify(state.Card_Items))
        },

        Remove : (state , action) =>{
            state.Card_Items = state.Card_Items.filter(item => item.id !== action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state.Card_Items))
        },

        UpdateQuantity : (state , action) =>{
            const {id , amount} = action.payload
            return {
                ...state,
                Card_Items : state.Card_Items.map((item) => item.id === id ? {...item , quantity : item.quantity + amount} : item)
            }
            // localStorage.setItem("cardItems", JSON.stringify(state.Card_Items))
        }
    },
    extraReducers : (builder) =>{
        builder
        .addCase(Fetch.pending , (state , action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = ""
                    })
                    .addCase(Fetch.fulfilled , (state , action) =>{
                        state.isLoading = false
                        state.isSuccess = true
                        state.All_Cards = action.payload
                        state.isError = false
                        state.message = ""
                                })
                                .addCase(Fetch.rejected , (state , action) =>{
                                    state.isLoading = false
                                    state.isSuccess = false
                                    state.isError = true
                                    state.message = action.payload
                                            })
    }
})

export const {Add , Remove , UpdateQuantity} = MenuSlice.actions
export default MenuSlice.reducer

export const Fetch = createAsyncThunk("FETCH/DATA", async () =>{
    try {
        const fetchData = await fetch("http://localhost:5001/Users")
        const data = fetchData.json()
        return data
    } catch (error) {
        console.log(error);
    }
})