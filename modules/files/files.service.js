const fs = require("fs");
const PATH = require("path");
const mkdirp = require("mkdirp");
const getDirName = PATH.dirname;
const ncp = require("ncp").ncp;

ncp.limit = 16;

const createDir = async (PATH, cb) => {
  if (!fs.existsSync(PATH)) {
    mkdirp(PATH, (err) => {
      if (err) return cb(err);
      cb(null, "[Init]: working dir is created in" + PATH);
    });
  } else {
    cb(null, "[Init]: working dir already exists in" + PATH);
  }
};

const saveFile = async (file, content, cb) => {
  mkdirp(getDirName(file), (err) => {
    if (err) return cb(err);

    return fs.writeFile(file, content, (err2) => {
      if (err2) {
        throw err2;
      }

      cb();
    });
  });
};

const copyFile = async (src, trg, cb) => {
  let isCalled = false;

  const rd = fs.createReadStream(src);
  rd.on("error", (err) => {
    done(err);
  });
  const wr = fs.createWriteStream(trg);
  wr.on("err", (err) => {
    done(err);
  });
  wr.on("close", () => {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!isCalled) {
      cb(err);
      isCalled = true;
    }
  }
};

const copyDir = async (src, trg, cb) => {
  mkdirp(trg, (err) => {
    if (err) return cb(err);

    ncp(src, trg, (err) => {
      if (err) {
        return cb(err);
      }
    });
  });
};

const readFile = async (file, cb) => {
  console.log("fileApi.readFile(), file:" + file);
  fs.readFile(file, (err, data) => {
    if (err) {
      console.log("fileApi.readFile(), err:" + err);
      throw err;
    }
    cb(err, String(data));
  });
};

module.exports = { readFile, copyDir, copyFile, saveFile, createDir };
