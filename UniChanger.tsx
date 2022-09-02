import type { ComponentType } from "react"
import { useEffect, useRef } from "react"
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"

const useStore = createStore({
    bigVariant: "variant_big_B",
    smallVariantIndex: 0,
})

const smallVariants = ["variantA", "variantB", "variantC", "variantC"]

export function Listener(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()

        const onKeydown1 = (e) => {
            if (e.key == "w") {
                const newIndex =
                    store.smallVariantIndex === smallVariants.length - 1
                        ? 0
                        : store.smallVariantIndex + 1
                setStore({ smallVariantIndex: newIndex })
            }
        }

        const onKeydown2 = (e) => {
            if (e.key == "w") {
                const newIndex =
                    store.smallVariantIndex === smallVariants.length - 1
                        ? 0
                        : store.smallVariantIndex + 1
                setStore({ smallVariantIndex: newIndex })
            }
        }

        const onKeydown4 = (e) => {
            if (e.key == "w")
                setStore({
                    bigVariant:
                        store.bigVariant === "variant_big_A"
                            ? "variant_big_B"
                            : "variant_big_A",
                })
        }

        useEffect(() => {
            if (props.name === "Screen 1") {
                window.removeEventListener("keydown", onKeydown2)
                window.removeEventListener("keydown", onKeydown4)
                window.addEventListener("keydown", onKeydown1)
            }

            if (props.name === "Screen 2") {
                window.removeEventListener("keydown", onKeydown1)
                window.removeEventListener("keydown", onKeydown4)
                window.addEventListener("keydown", onKeydown2)
            }

            if (props.name === "Screen 3") {
                window.removeEventListener("keydown", onKeydown1)
                window.removeEventListener("keydown", onKeydown2)
                window.removeEventListener("keydown", onKeydown4)
            }

            if (props.name === "Screen 4") {
                window.removeEventListener("keydown", onKeydown1)
                window.removeEventListener("keydown", onKeydown2)
                window.addEventListener("keydown", onKeydown4)
            }
        }, [])

        return <Component {...props} />
    }
}

export function Small_Component(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        return <Component {...props} variant={store.smallVariant} />
    }
}

export function Bigger_Component(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        return <Component {...props} variant={store.bigVariant} />
    }
}
