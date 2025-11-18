// src/pages/AskGuruji.jsx
import React, { useState } from "react";

const RoastForm = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    age: "",
    relationship: "single",
    job: "unemployed",
    problem: "",
    extra: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.problem) {
      alert("Name, Age & Main Problem are mandatory bro!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      navigate("/result", { state: form });
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-pink-950 flex items-center justify-center p-5">
      <div className="max-w-3xl w-full">

        <h1 className="text-5xl md:text-7xl font-extrabold text-center text-white mb-4">
          Spill Your Tea
        </h1>
        <p className="text-center text-purple-300 text-lg mb-12">
          The more you confess, the harder Guruji roasts
        </p>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-purple-500/40 shadow-2xl space-y-8">

          {/* Name */}
          <div>
            <label className="block text-purple-200 font-bold mb-2">Your Name</label>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Arjun, Diya, Roshni, etc."
              className="w-full px-6 py-4 rounded-xl bg-white/20 border border-purple-400/50 text-white placeholder-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition"
            />
          </div>

          {/* Age + Relationship */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-purple-200 font-bold mb-2">Age</label>
              <input
                required
                type="number"
                name="age"
                min="16"
                max="69"
                value={form.age}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-white/20 border border-purple-400/50 text-white focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              />
            </div>

            <div>
              <label className="block text-purple-200 font-bold mb-2">Relationship Status</label>
              <select
                name="relationship"
                value={form.relationship}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-black/70 border border-purple-400/50 text-white focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              >
                <option value="single">Single (forever?)</option>
                <option value="relationship">In a Relationship (actually happy?)</option>
                <option value="situationship">Situationship (ghosted yet?)</option>
                <option value="talking">Talking Stage (since 2023?)</option>
                <option value="married">Married (RIP freedom)</option>
                <option value="complicated">It's Complicated (default answer)</option>
              </select>
            </div>
          </div>

          {/* Job Status */}
          <div>
            <label className="block text-purple-200 font-bold mb-2">Job / Money Status</label>
            <select
              name="job"
              value={form.job}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-xl bg-black/70 border border-purple-400/50 text-white focus:outline-none focus:ring-4 focus:ring-purple-500/50"
            >
              <option value="employed">Employed (getting paid?)</option>
              <option value="unemployed">Unemployed (skill issue?)</option>
              <option value="neet">NEET/JEE Dropper (4th attempt?)</option>
              <option value="freelance">Freelancer (payment pending since 2024)</option>
              <option value="business">Business (profit or passion project?)</option>
              <option value="lazy">Not interested in working (real sigma)</option>
            </select>
          </div>

          {/* Main Problem */}
          <div>
            <label className="block text-purple-200 font-bold mb-2">Your Main Pain</label>
            <select
              required
              name="problem"
              value={form.problem}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-xl bg-black/70 border border-purple-400/50 text-white focus:outline-none focus:ring-4 focus:ring-purple-500/50"
            >
              <option value="" disabled>Select your suffering</option>
              <option value="marriage">When will I get married?</option>
              <option value="job">I don't have a job</option>
              <option value="money">I'm broke AF (balance ₹69)</option>
              <option value="love">Love failure / Ex is happy</option>
              <option value="parents">Parents pressuring 24×7</option>
              <option value="future">What is my future bro?</option>
              <option value="other">Other (type below)</option>
            </select>
          </div>

          {/* Extra Rant */}
          <div>
            <label className="block text-purple-200 font-bold mb-2">
              Want to rant more? (More details = Harder roast)
            </label>
            <textarea
              name="extra"
              rows="4"
              value={form.extra}
              onChange={handleChange}
              placeholder="Ex's new partner, mom's dialogues, bank screenshot... type anything"
              className="w-full px-6 py-4 rounded-xl bg-white/20 border border-purple-400/50 text-white placeholder-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-6 rounded-2xl font-extrabold text-2xl transition-all transform hover:scale-105 shadow-2xl ${
              loading 
                ? "bg-purple-900 cursor-not-allowed" 
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            } text-white`}
          >
            {loading ? "Guruji is reading your chats..." : "Get Roasted by Guruji"}
          </button>

        </form>

        <p className="text-center text-purple-400 mt-10 text-sm italic">
          Everything is confidential. The roast is not.
        </p>
      </div>
    </div>
  );
};

export default RoastForm;