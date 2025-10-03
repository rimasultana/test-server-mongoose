import dotenv from "dotenv"
import path from "path"


dotenv.config({ path: path.join(process.cwd(), ".env") })

const config = {
    data_base_url: process.env.DATA_BASE_URL,
    port: process.env.PORT || 5000
}

export default config