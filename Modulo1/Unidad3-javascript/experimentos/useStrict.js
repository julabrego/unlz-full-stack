// 'use strict'

unaVariable = "En modo estricto tiro error porque no me declararon";

function invocarVariableGlobalNoDeclarada() {
  console.log(unaVariable);
}

invocarVariableGlobalNoDeclarada()

function definirVariableUndefined() {
  undefined = 'en modo estricto esto da error';
  console.log(undefined)
}

definirVariableUndefined()