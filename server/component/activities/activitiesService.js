import Model from './activitiesModel';

const ActivitiesService = {
    findAll: (callback) => {
        Model.find((err, docs) => {
            callback(docs);
        });
    },
    findByName: (name, callback) => {
        Model.find({name: name}, (err, docs) => {
            callback(docs);
        });
    },
    findById: (id, callback) => {
        Model.findById(id, (err, docs) => {
            callback(docs);
        });
    },
    save: (obj, callback) => {
        let model = new Model(obj);
        model.save((err, obj) => {
            callback(obj);
        });
    },
    update: (id, values, callback) => {
        this.findById(id, activities => {
            let newObj = Object.assign(values, activities);
            this.save(newObj,callback);
        });
    },
    deleteById: (id, callback) => {
        this.findById(id,obj=>{
            obj.remove(callback);
        });
    }
};
module.exports = ActivitiesService;