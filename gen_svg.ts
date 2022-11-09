import { QuantizerCelebi} from "https://esm.sh/@material/material-color-utilities@0.2.0";
import Vips from "https://esm.sh/wasm-vips@0.0.3"

let img = Vips.Image.newFromFile("nanderLP.png");

QuantizerCelebi.quantize()