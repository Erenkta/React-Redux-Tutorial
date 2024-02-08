import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const counterState = {
    value:0
}



const counterSlice = createSlice({
    name: "counter",
    initialState: counterState,
    reducers:{
        increment : (state) =>{ // burada increment : (state,action) şeklinde de alınabilir fakat bu optional
            state.value += 1; // state'imizin içindeki value değerini 1 arttırdık
            // burada state'i alıp direkt değiştirmemekle alakalı bir durumdan bahsetmiştik
            //createSlice bu işi bizim için hallediyor arka planda state'in kopyasını alıyor değiştiriyor ve sonra overwrite ediyor
        },
        decrement : (state)=>{
            state.value -=1;
        },
        incrementByAmount:(state,action)=>{
            state.value += action.payload; // payload eklentisinden gelen veriyi ekleyip value'a at
        }
    }, // Bu state ile alakalı reducer'ları burada belirledik 
    extraReducers: (builder) => { 
        builder.addCase(incrementAsync.pending,(state)=>{
            console.log("Async pending ");
        }).addCase(incrementAsync.fulfilled,(state,action)=>{ //chaining ile birbirine bağladık
            state.value += action.payload;
        })
    }
})

export const incrementAsync = createAsyncThunk( // ASYNC bir action oluşturmak
    "counter/incrementAsync",
    async (amount)=>{
        await new Promise((resolve) => setTimeout(resolve,1000));
        return amount;
    }
)
export const {increment , decrement,incrementByAmount} = counterSlice.actions; // burada da action'ları slicer sayesinde import ettik ve gereksiz kod yazmaktan kurtulduk
export default counterSlice.reducer;