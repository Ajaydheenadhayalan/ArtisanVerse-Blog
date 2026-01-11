const FeatureCard = ({ icon: Icon, title, description, benefits }) => {
  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-6 text-amber-600 dark:text-amber-500">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
        {description}
      </p>
      {benefits && (
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start text-sm text-slate-500 dark:text-slate-400">
              <span className="mr-2 text-amber-500">•</span>
              {benefit}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeatureCard;
