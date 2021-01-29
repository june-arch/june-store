export default function Rupiah({nominal}){
    const numb = nominal;
    const format = numb.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
    return rupiah
}