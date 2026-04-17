# Pushdown Automata Simulator

This project is an interactive web-based simulator for Pushdown Automata (PDA), designed to visualize the execution of both deterministic and nondeterministic models. It allows users to explore how PDAs process input strings using stack operations and state transitions.

The simulator supports predefined context-free languages as well as custom user-defined automata, making it a practical tool for understanding core concepts in Theory of Computation.

---

## Features

* Simulation of deterministic and nondeterministic PDAs
* Step-by-step execution of transitions
* Full automatic execution mode
* Stack visualization during computation
* Execution log for tracing transitions
* Support for epsilon (ε) transitions
* Custom PDA creation through an interactive editor
* Predefined languages such as:

  * aⁿbⁿ
  * equal number of a’s and b’s
  * aⁿbⁿcᵐ
  * aⁿbᵐcⁿ
  * aⁿb²ⁿ
  * odd-length palindromes
  * even-length palindromes (npda)

---

## Theory

A Pushdown Automaton (PDA) is a computational model that extends finite automata by adding a stack as auxiliary memory. It is formally defined as:
M = (Q, Σ, Γ, δ, q₀, Z₀, F)
Where:
* Q is a finite set of states
* Σ is the input alphabet
* Γ is the stack alphabet
* δ is the transition function
* q₀ is the start state
* Z₀ is the initial stack symbol
* F is the set of accept states

This simulator demonstrates how PDAs recognize context-free languages using stack operations such as push, pop, and replace.

