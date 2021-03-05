initSidebarItems({"constant":[["ALLOW_MEMORY_UNSAFE","Whether generation of instructions that require borrow checking will be allowed. (Note that if `NEGATE_PRECONDITIONS` is true then these instructions can still come up). Default is `false`"],["CALL_STACK_LIMIT","Call stack height limit. This is defined in the VM, and is replicated here. This should track that constant."],["EXECUTE_UNVERIFIED_MODULE","Whether generated modules will be executed even if they fail the the bytecode verifier. Default is `false`"],["GAS_METERING","Whether gas will be metered when running generated programs. The default is `true` to bound the execution time. Default is `true`"],["INHABITATION_INSTRUCTION_LIMIT","Certain randomly generated types can lead to extremely long instruction sequences. This can lead to test generation taking quite a while in order to handle all of these. This parameter bounds the maximum allowable instruction length for a type. If the instruction sequence is larger then this, a new module and bytecode generation will be attempted."],["MAX_CFG_BLOCKS","This defines the maximum number of blocks that will be generated for a function body's CFG. During generation, a random number of blocks from 1 to this constant will be created. Default is `10`"],["MUTATION_TOLERANCE","This defines how tolerant the generator will be about deviating from the starting stack height. Default is `0.9`"],["NEGATE_PRECONDITIONS","Whether preconditions will be negated to generate invalid programs in order to test error paths. Default is `false`"],["NEGATION_PROBABILITY","The probability that preconditions will be negated for a pariticular bytecode instruction. Default is `0.1`"],["RUN_ON_VM","Whether the generated programs should be run on the VM Default is `true`"],["VALUE_STACK_LIMIT","The value stack size limit. This is defined in the VM and is replicated here. This should remain in sync with the constant for this defined in the VM."]],"fn":[["module_generation_settings","The module generation settings that are used for generation module scaffolding for bytecode generation."]],"struct":[["Args","Command line arguments for the tool"]]});