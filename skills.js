function calculateNumbers(var1, var2) {
    // Verifica que los parámetros sean números
    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        throw new Error('Ambos parámetros deben ser números');
    }

    // Retorna la suma de los dos números
    return var1 + var2;
}