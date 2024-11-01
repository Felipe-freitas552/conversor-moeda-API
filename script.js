//92c34f87db0c84ed475f2b03
const apiKey = '92c34f87db0c84ed475f2b03';
 
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// Função para buscar taxa de câmbio via API
async function getExchangeRate(daMoeda, ParaMoeda) {
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();
 
        if(data.result == "success"){
            return data.conversion_rates[ParaMoeda];
        }else{
            throw new Error('Erro ao buscar as taxas de câmbio');
        }
 
    }catch (error){
        console.error("Error:", error)
    return null;
    }
 
    }

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    document.getElementById('currency-form').addEventListener('submit', async function(event){
event.preventDefault();

const valor = parseFloat(document.getElementById('amount').value);
const daMoeda = document.getElementById('daMoeda').value;
const ParaMoeda = document.getElementById('paraMoeda').value;
//busca taxa de cambio da API
const exchangerate = getExchangeRate(daMoeda, ParaMoeda);

if (exchangerate){
    const convertedValue = valor * exchangerate;

    const conversao = document.getElementById('conersao');
    conversao.textContent = 'resultado: ${convertedValue.toFixed(2)}${ParaMoeda}';
    
}
    });
