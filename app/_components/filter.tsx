import Genre from "./genre"
import Lists from "./lists"

export default function Filter() {
  return (
    <div className="h-1/12 bg-red flex justify-between">
      <Genre />
      <Lists />
    </div>
  )
}
