

// IAR calculates the Inflation-adjusted return
// Finance.prototype.IAR = function (investmentReturn, inflationRate) {
//   return 100 * ((1 + investmentReturn) / (1 + inflationRate) - 1);
// };


//Inflation vanillajs
function calcInflation() {
    investmentReturn = parseFloat(document.getElementById("first").value);
    inflationRate = parseFloat(document.getElementById("second").value);

    inflation = 100 * ((1 + investmentReturn)/ (1 + inflationRate) -1);
   
    result = document.getElementById("result").innerHTML = parseFloat(100 * ((1 + investmentReturn) / (1 + inflationRate) - 1)).toFixed(4);
}


// Amortization
function calcAPR(){

    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    totalPayments = document.getElementById("tp").value;

    rate = (rate/12)    
    // type = document.getElementById("type").value;

    result = document.getElementById("result").innerHTML =  parseFloat(principal*(rate*Math.pow(1+rate,totalPayments))/(Math.pow(1+rate,totalPayments)-1)).toFixed(2);
}

//Future value

function calcFuture(){
    presentValue = document.getElementById("pv").value;
    rate = document.getElementById("rate").value;
    t = document.getElementById("time").value;
    
    rate = rate/100;

    result = document.getElementById("result").innerHTML = parseFloat(presentValue * Math.pow(1 + rate, t)).toFixed(2);

}

// Present Value

function calcPresent() {
  futureValue = document.getElementById("fv").value;
  rate = document.getElementById("rate").value;
  t = document.getElementById("time").value;

  rate = rate / 100;


  result = document.getElementById("result").innerHTML = parseFloat( futureValue / Math.pow(1 + rate, t)).toFixed(2);
}


//return on investment 
function calcROI(){
    initialinvestment = document.getElementById("initial").value;
    earning = document.getElementById("earning").value;

    result = document.getElementById("result").innerHTML = parseFloat(((earning- (initialinvestment)) / (initialinvestment)) * 100).toFixed(2);


    //   var roi = ((earnings - Math.abs(cf0)) / Math.abs(cf0)) * 100;
    //   return Math.round(roi * 100) / 100;
}




// Net Present Value
// function calcNPV() {
//     function npv(){
//         var rate = rate/100, npv = arguments[1];
//         for (var i = 2; i < arguments.length; i++) {
//           npv +=(arguments[i] / Math.pow((1 + rate), i - 1));
//         }
//         return Math.round(npv * 100) / 100;
//     }

//     rate = document.getElementById("rate").value;
//     initialinvestment = document.getElementById("initial").value;
// }

// Compound Annual Growth Rate (CAGR)
function calcCAGR(){
    beginningValue = document.getElementById("begin").value;
    endingValue = document.getElementById("end").value;
    numberOfperiods = document.getElementById("nop").value;



    result = document.getElementById("result").innerHTML = ( parseFloat( Math.pow(endingValue / beginningValue, 1 / numberOfperiods) - 1).toFixed(2) * 10000) / 100;
}

// Finance.prototype.CAGR = function(beginningValue, endingValue, numOfPeriods) {
//   var CAGR = Math.pow((endingValue / beginningValue), 1 / numOfPeriods) - 1;
//   return Math.round(cagr * 10000) / 100;
    


// Compound Interest (CI)
// Finance.prototype.CI = function(rate, numOfCompoundings, principal, numOfPeriods) {
//   var CI = principal * Math.pow((1 + ((rate/100)/ numOfCompoundings)), numOfCompoundings * numOfPeriods);
//   return Math.round(CI * 100) / 100;

function calcCI(){
    rate = document.getElementById("rate").value;
    numOfCompoundings = document.getElementById("noc").value;
    principal = document.getElementById("principal").value;
    numOfPeriods = document.getElementById("nop").value; 
    
    result = document.getElementById("result").innerHTML =  parseFloat(principal * Math.pow((1 + ((rate/100)/ numOfCompoundings)), numOfCompoundings * numOfPeriods)).toFixed(4);
}


// Leverage Ratio (LR)
// Finance.prototype.LR = function(totalLiabilities, totalDebts, totalIncome) {
//   return (totalLiabilities  + totalDebts) / totalIncome;
// };

function calcLR(){
    totalLiabilities = Number(document.getElementById("tl").value);
    totalDebts = Number(document.getElementById("td").value);
    totalIncome = Number(document.getElementById("ti").value);


    result = document.getElementById("result").innerHTML = parseFloat((totalLiabilities + totalDebts) / totalIncome).toFixed(4);


}

//rule of 72 
function ruleof(){
    rate = document.getElementById("rate").value;

    result = document.getElementById("result").innerHTML = parseFloat(72/rate).toFixed(4);
}



// Weighted Average Cost of Capital (WACC)
// Finance.prototype.WACC = function(marketValueOfEquity, marketValueOfDebt, costOfEquity, costOfDebt, taxRate) {
//   var E = marketValueOfEquity;
//   var D = marketValueOfDebt;
//   var V =  marketValueOfEquity + marketValueOfDebt;
//   var Re = costOfEquity;
//   var Rd = costOfDebt;
//   var T = taxRate;

//   var WACC = ((E / V) * Re/100) + (((D / V) * Rd/100) * (1 - T/100));
//   return Math.round(WACC * 1000) / 10;
// };


function calcWACC(){
    E = Number(document.getElementById("mve").value);
    D = Number(document.getElementById("mvd").value);
    // V = Number(document.getElementById("v").value);
    V = E + D
    Re =Number(document.getElementById("coe").value);
    Rd =Number( document.getElementById("cod").value);
    T = Number(document.getElementById("rate").value);


    result = document.getElementById("result").innerHTML = parseFloat(((E / V) * Re/100) + (((D / V) * Rd/100) * (1 - T/100)))*100;
}



// PMT calculations 

// Finance.prototype.PMT = function (rate, numOfPayments, principal) {
//   var rate = rate / 100,
//     pmt;
//   pmt = -(principal * rate) / (1 - Math.pow(1 + rate, -numOfPayments));
//   return Math.round(pmt * 100) / 100;
// };
function calcPMT(){
    rate = Number(document.getElementById("fir").value);
    numOfPayments = Number(document.getElementById("nop").value);
    principal = Number(document.getElementById("principal").value);
    rate = rate/100;

    result = document.getElementById("result").innerHTML = parseFloat(-(principal * rate) / (1 - Math.pow(1 + rate, -numOfPayments))).toFixed(2);
}


//CAPM calculates expected return of an asset.
// Finance.prototype.CAPM = function (rf, beta, emr, err) {
//   var ans = rf/100 + beta * (emr/100 - rf/100);
//   return ans;
// }

function calcCAPM(){
    rf = document.getElementById("rf").value;
    beta = document.getElementById("beta").value;
    emr = document.getElementById("emr").value;

    result = document.getElementById("result").innerHTML = parseFloat(rf / 100 + beta * (emr / 100 - rf / 100)).toFixed(2);
}


//Returns the Value of stock with dividend growing at a 
//constant growth rate to perpetuity.
// Finance.prototype.stockPV = function (g, ke, D0) {
//   var valueOfStock = (D0 * (1 + g/100))/((ke/100) - (g/100))
//   return Math.round(valueOfStock)
// }

function calcValueOfStock(){
    g = document.getElementById("g").value;
    ke = document.getElementById("ke").value;
    D0 = document.getElementById("d").value;

    result = document.getElementById("result").innerHTML = parseFloat((D0 * (1 + g / 100)) / (ke / 100 - g / 100)).toFixed(4);
}  



// Preffered Stock 


   function calcPS() {
     p = Number(document.getElementById("p").value);
     r = Number(document.getElementById("r").value);

     r = r/100;
     Result = document.getElementById("result").innerHTML = parseFloat(p/r).toFixed(4);
   }


// Real Interest 

function calcRI(){
    nomyield = document.getElementById("first").value;
    inflation = document.getElementById("second").value;

    result = document.getElementById("result").innerHTML = parseFloat(((1 + nomyield)/(1 + inflation))-1).toFixed(4);
}


// growing perpetuity

        function calcGP() {
          cf = document.getElementById("first").value;
          rate = document.getElementById("second").value;
          growth = document.getElementById("third").value;

          rate = rate/100;
          growth = growth/100;

          Result = document.getElementById("result").innerHTML = parseFloat(cf / (rate- growth)).toFixed(4);
        }



// present value perpetuity

        function calcPVP(){
            cf = document.getElementById("first").value;
            rate = document.getElementById("second").value;


            Result = document.getElementById("result").innerHTML = parseFloat(cf/(rate/100)).toFixed(4);

        }



// simple interest

        function calcSI(){
            presentValue = document.getElementById("first").value;
            rate = document.getElementById("second").value;
            time = document.getElementById("third").value;

            rate = rate/100;

            reuslt = document.getElementById("result").innerHTML = parseFloat(presentValue*(1+ (rate*time))).toFixed(4);
        }



//sheet 2 
// Just paid a dividend

function calcJPAD(){
    Dividend = Number(document.getElementById("d").value);
    GrowthRate = Number(document.getElementById("gr").value);
    ReturnRate = Number(document.getElementById("rr").value);

    gr = gr/100
    rr=  rr/100
    
    Result = document.getElementById("result").innerHTML = parseFloat((d*(1+gr))/(rr-gr)).toFixed(4);
}


// will pay a dividend

function calcWPAD(){

    dividend = document.getElementById("d").value;
    growthRate = document.getElementById("gr").value;
    returnRate = document.getElementById("rr").value;

    result = document.getElementById("result").innerHTML = parseFloat(d/(rr-gr))
}
