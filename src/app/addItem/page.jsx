"use client"
export default function AddItem() {
    return (
      <div className="min-h-screen pt-100 bg-white p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold">Add Item</h1>
          <button className="bg-green-500 text-white px-3 py-2 rounded">Add</button>
        </div>
        <form className="space-y-4">
          <div>
            <input type="text" placeholder="Item Name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <input type="number" placeholder="Item Price" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <select className="w-full p-2 border border-gray-300 rounded" placeholder="Shipping method">
              <option value="same">Same day</option>
              <option value="none">None</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white p-3 rounded">
            Submit
          </button>
        </form>
      </div>
    );
  }
  